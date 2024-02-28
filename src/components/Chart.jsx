import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import "../styles/Chart.css";

const ChartContainer = () => {
    const [showChart, setShowChart] = useState(false);

    useEffect(() => {
        if (showChart) {
            drawChart();
        }
    }, [showChart]);

    useEffect(() => {
        setShowChart(true);
    }, []);

    const drawChart = () => {
        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: "Line",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                },
                {
                    label: 'Dotted Line',
                    data: [65, 39, 60, 71, 46, 65, 40],
                    fill: false,
                    borderColor: 'rgb(222,239,249)',
                    borderDash: [5, 5],
                    tension: 0.1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                tooltips: {
                    enabled: false,
                    custom: customTooltip
                }
            }
        });
    };

    const customTooltip = (tooltipModel) => {
        var tooltipEl = document.getElementById('chartjs-tooltip');

        if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = 'chartjs-tooltip';
            tooltipEl.classList.add('tooltip');
            document.body.appendChild(tooltipEl);
        }

        if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
        }

        tooltipEl.innerHTML = '';

        var tableRoot = document.createElement('table');
        var innerHtml = '';

        var titleLines = tooltipModel.title || [];
        titleLines.forEach(function(title) {
            innerHtml += '<tr><th>' + title + '</th></tr>';
        });
        innerHtml += '<tbody>';

        var bodyLines = tooltipModel.body.map(function(bodyItem) {
            return bodyItem.lines;
        });
        bodyLines.forEach(function(body, i) {
            var colors = tooltipModel.labelColors[i];
            var style = 'background:' + colors.backgroundColor;
            style += '; border-color:' + colors.borderColor;
            style += '; border-width: 2px';
            var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
            innerHtml += '<tr><td>' + span + body + '</td></tr>';
        });
        innerHtml += '</tbody>';

        tableRoot.innerHTML = innerHtml;
        tooltipEl.appendChild(tableRoot);

        var position = document.getElementById('myChart').getBoundingClientRect();

        tooltipEl.style.opacity = 1;
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
        tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
        tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
        tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
        tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
        tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
        tooltipEl.style.pointerEvents = 'none';
    };

    return (
        <div>
            {showChart && (
                <div className="chart-container">
                    <canvas id="myChart" style={{ maxHeight: '330px'}}></canvas>
                </div>
            )}
        </div>
    );
};

export default ChartContainer;
