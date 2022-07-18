
const alertBanner = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart').getContext('2d');
const bell = document.getElementsByClassName("bell")[0];
const boxItem = document.querySelectorAll(".notify-close");
const greendot = document.getElementById("greendot");


// Notification banner
document.querySelector(".bell").addEventListener("click", (e) => {
    if (e.target === bell) {
      box.classList.toggle("show");
      greendot.classList.toggle("displaynone");
    }
  });

  // EVENT LISTENER TO CLOSE THE NOTIFICATION BANNER 
boxItem.forEach((item) => {
    item.addEventListener("click", (e) => {
      const button = e.target;
      button.closest(".notify-item").remove();
    });
  });


// alert tab
alertBanner.innerHTML = `
<div class="alert-banner">
<p class="alert-text"><strong>Alert:</strong> You have unread messages</p>
<p class="alert-banner-close">x</p>
</div>
`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    alertBanner.style.transition = "all .5s ease-in-out";
     }
    });


    //update traffic on click
    const hourBtn = document.getElementById("hour-btn");
    const dailyBtn = document.getElementById("daily-btn");
    const weeklyBtn = document.getElementById("weekly-btn");
    const monthlyBtn = document.getElementById("monthly-btn");

    hourBtn.addEventListener("click", (e) => {
        hourBtn.className = "active"
        dailyBtn.className = '';
        weeklyBtn.className = '';
        monthlyBtn.className = '';

        trafficChart.data.datasets[0].data = [100, 200, 90, 120, 340, 220, 180, 380, 450, 400, 100];
        trafficChart.data.labels = 
        ["10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
        "8pm",]
        trafficChart.update();
  });
  dailyBtn.addEventListener("click", (e) => {
    hourBtn.className = ""
    dailyBtn.className = 'active';
    weeklyBtn.className = '';
    monthlyBtn.className = '';
  
    trafficChart.data.datasets[0].data = [500, 300, 150, 450, 380, 120, 550];
    trafficChart.data.labels = 
    ["Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"]
    trafficChart.update();
  });
  weeklyBtn.addEventListener("click", (e) => {
    hourBtn.className = ""
    dailyBtn.className = '';
    weeklyBtn.className = 'active';
    monthlyBtn.className = '';
  
    trafficChart.data.datasets[0].data = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500]
    trafficChart.data.labels = 
    [
      "16-22",
      "23-29",
      "30-5",
      "6-12",
      "13-19",
      "20-26",
      "27-3",
      "4-10",
      "11-17",
      "18-24",
      "25-31",
    ]
    trafficChart.update();
  });
  
  monthlyBtn.addEventListener("click", (e) => {
    hourBtn.className = ""
    dailyBtn.className = '';
    weeklyBtn.className = '';
    monthlyBtn.className = 'active';
  
    trafficChart.data.datasets[0].data = [3000, 2000, 3500, 5000, 7000, 9000, 7500, 7000, 6000, 3000, 1500, 2500];
    trafficChart.data.labels = 
    ["Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",]
    trafficChart.update();
  });

//chart 1
    let trafficData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 2,
        }]
        };
        let trafficOptions = {
                backgroundColor: 'rgba(112, 104, 201, .5)',
                fill: true,
                aspectRatio: 2.5,
                animation: {
                duration: 0
                },
                scales: {
                y: {
                beginAtZero: true
                }
                },
                plugins: {
                legend: {
                display: false
                }
           }
        };
            
        let trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData,
            options: trafficOptions
            });
            
    
  //chart2
  const dailyCanvas = document.getElementById("daily-chart");

  // data for daily traffic bar chart
    const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 2,
      }]
    };
    const dailyOptions = {
    scales: {
    y: {
    beginAtZero: true
      }
    },
    plugins: {
    legend: {
    display: false
      }
    }
    };


    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
        });
        

//chart3
const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phoones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor:[
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold',
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});