// Global variables
let paymentChart = null;

// DOM elements
const loanAmount = document.getElementById('loanAmount');
const loanAmountSlider = document.getElementById('loanAmountSlider');
const interestRate = document.getElementById('interestRate');
const interestRateSlider = document.getElementById('interestRateSlider');
const loanTerm = document.getElementById('loanTerm');
const loanTermSlider = document.getElementById('loanTermSlider');
const downPayment = document.getElementById('downPayment');
const downPaymentSlider = document.getElementById('downPaymentSlider');

const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');
const showYearlyOnly = document.getElementById('showYearlyOnly');

// Sync input fields with sliders
function syncInputs(input, slider) {
    input.addEventListener('input', () => {
        slider.value = input.value;
        calculate();
    });

    slider.addEventListener('input', () => {
        input.value = slider.value;
        calculate();
    });
}

syncInputs(loanAmount, loanAmountSlider);
syncInputs(interestRate, interestRateSlider);
syncInputs(loanTerm, loanTermSlider);
syncInputs(downPayment, downPaymentSlider);

// Calculate monthly payment
function calculateMonthlyPayment(principal, annualRate, years) {
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;

    if (monthlyRate === 0) {
        return principal / numberOfPayments;
    }

    const monthlyPayment = principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return monthlyPayment;
}

// Generate amortization schedule
function generateAmortizationSchedule(principal, annualRate, years) {
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;
    const monthlyPayment = calculateMonthlyPayment(principal, annualRate, years);

    let balance = principal;
    const schedule = [];

    for (let month = 1; month <= numberOfPayments; month++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        balance -= principalPayment;

        // Prevent negative balance due to floating point
        if (balance < 0) balance = 0;

        schedule.push({
            month: month,
            payment: monthlyPayment,
            principal: principalPayment,
            interest: interestPayment,
            balance: balance
        });
    }

    return schedule;
}

// Format currency
function formatCurrency(amount) {
    return '€' + amount.toLocaleString('nl-NL', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Calculate and display results
function calculate() {
    const principal = parseFloat(loanAmount.value) || 0;
    const rate = parseFloat(interestRate.value) || 0;
    const years = parseFloat(loanTerm.value) || 0;
    const down = parseFloat(downPayment.value) || 0;

    if (principal <= 0 || years <= 0) {
        return;
    }

    const monthlyPayment = calculateMonthlyPayment(principal, rate, years);
    const totalPayment = monthlyPayment * years * 12;
    const totalInterest = totalPayment - principal;

    // Update result cards
    document.getElementById('monthlyPayment').textContent = formatCurrency(monthlyPayment);
    document.getElementById('totalPayment').textContent = formatCurrency(totalPayment);
    document.getElementById('totalInterest').textContent = formatCurrency(totalInterest);

    // Update summary
    document.getElementById('summaryLoan').textContent = formatCurrency(principal);
    document.getElementById('summaryDownPayment').textContent = formatCurrency(down);

    const totalPrice = principal + down;
    const ltv = totalPrice > 0 ? (principal / totalPrice * 100).toFixed(1) : 0;
    document.getElementById('summaryLTV').textContent = ltv + '%';
    document.getElementById('summaryRate').textContent = rate + '%';
    document.getElementById('summaryTerm').textContent = years + ' jaar';

    // Generate amortization schedule
    const schedule = generateAmortizationSchedule(principal, rate, years);

    // Update chart
    updateChart(schedule, years);

    // Update table
    updateAmortizationTable(schedule);
}

// Update chart
function updateChart(schedule, years) {
    const ctx = document.getElementById('paymentChart').getContext('2d');

    // Sample data points (show yearly data for readability)
    const dataPoints = [];
    for (let i = 0; i < schedule.length; i += 12) {
        dataPoints.push(schedule[i]);
    }
    // Add the last month if not already included
    if (schedule.length % 12 !== 1) {
        dataPoints.push(schedule[schedule.length - 1]);
    }

    const labels = dataPoints.map((item, index) => {
        if (index === 0) return 'Start';
        if (index === dataPoints.length - 1) return 'Einde';
        return 'Jaar ' + index;
    });

    const principalData = dataPoints.map(item => item.principal);
    const interestData = dataPoints.map(item => item.interest);
    const balanceData = dataPoints.map(item => item.balance);

    if (paymentChart) {
        paymentChart.destroy();
    }

    paymentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Hoofdsom betaling',
                    data: principalData,
                    borderColor: '#4f46e5',
                    backgroundColor: 'rgba(79, 70, 229, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Rente betaling',
                    data: interestData,
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Restschuld',
                    data: balanceData,
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    fill: true,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += formatCurrency(context.parsed.y);
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Maandelijkse betaling (€)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '€' + value.toLocaleString('nl-NL');
                        }
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Restschuld (€)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '€' + value.toLocaleString('nl-NL');
                        }
                    },
                    grid: {
                        drawOnChartArea: false,
                    }
                }
            }
        }
    });
}

// Update amortization table
function updateAmortizationTable(schedule) {
    const tbody = document.getElementById('amortizationBody');
    tbody.innerHTML = '';

    const yearlyOnly = showYearlyOnly.checked;

    if (yearlyOnly) {
        // Show yearly summary
        let yearlyData = [];
        for (let year = 1; year <= Math.ceil(schedule.length / 12); year++) {
            const startMonth = (year - 1) * 12;
            const endMonth = Math.min(year * 12, schedule.length);

            let yearPayment = 0;
            let yearPrincipal = 0;
            let yearInterest = 0;

            for (let i = startMonth; i < endMonth; i++) {
                yearPayment += schedule[i].payment;
                yearPrincipal += schedule[i].principal;
                yearInterest += schedule[i].interest;
            }

            const endBalance = schedule[endMonth - 1].balance;

            yearlyData.push({
                year: year,
                payment: yearPayment,
                principal: yearPrincipal,
                interest: yearInterest,
                balance: endBalance
            });
        }

        yearlyData.forEach(data => {
            const row = document.createElement('tr');
            row.className = 'year-row';
            row.innerHTML = `
                <td>Jaar ${data.year}</td>
                <td>${formatCurrency(data.payment)}</td>
                <td>${formatCurrency(data.principal)}</td>
                <td>${formatCurrency(data.interest)}</td>
                <td>${formatCurrency(data.balance)}</td>
            `;
            tbody.appendChild(row);
        });
    } else {
        // Show all months
        schedule.forEach(item => {
            const row = document.createElement('tr');
            const year = Math.floor((item.month - 1) / 12) + 1;
            const month = ((item.month - 1) % 12) + 1;

            row.innerHTML = `
                <td>Jaar ${year}, Maand ${month}</td>
                <td>${formatCurrency(item.payment)}</td>
                <td>${formatCurrency(item.principal)}</td>
                <td>${formatCurrency(item.interest)}</td>
                <td>${formatCurrency(item.balance)}</td>
            `;
            tbody.appendChild(row);
        });
    }
}

// Reset to defaults
function reset() {
    loanAmount.value = 300000;
    loanAmountSlider.value = 300000;
    interestRate.value = 4.5;
    interestRateSlider.value = 4.5;
    loanTerm.value = 30;
    loanTermSlider.value = 30;
    downPayment.value = 0;
    downPaymentSlider.value = 0;

    calculate();
}

// Event listeners
calculateBtn.addEventListener('click', calculate);
resetBtn.addEventListener('click', reset);
showYearlyOnly.addEventListener('change', calculate);

// Initial calculation
calculate();
