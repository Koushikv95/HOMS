document.addEventListener("DOMContentLoaded", function () {
  displayOutingRequests(); // Call function to load requests on page load
});

function displayOutingRequests() {
  var outingRequestsContainer = document.getElementById("outingRequests");
  outingRequestsContainer.innerHTML = ""; // Clear previous entries

  // Get stored requests from localStorage
  var outingRequests = JSON.parse(localStorage.getItem('outingRequests')) || [];

  // Display all outing requests
  outingRequests.forEach(function (request, index) {
      var requestDiv = document.createElement("div");
      requestDiv.className = "outing-request";

      var details = `
          <strong>Name:</strong> ${request.name}<br>
          <strong>Registration Number:</strong> ${request.registrationNumber}<br>
          <strong>Place:</strong> ${request.toPlace}<br>
          <strong>Outing Time:</strong> ${request.outingTime}<br>
          <strong>In Time:</strong> ${request.inTime}<br>
          <strong>Parent's Phone Number:</strong> ${request.parentPhoneNumber}<br>
          <button onclick="approveRequest(${index})"style="background-color:green;">Approve</button>
          <br>
          <button onclick="rejectRequest(${index})"style="background-color:red;">Reject</button>
      `;

      requestDiv.innerHTML = details;
      outingRequestsContainer.appendChild(requestDiv);
  });
}

function approveRequest(index) {
  var outingRequests = JSON.parse(localStorage.getItem('outingRequests')) || [];
  alert("Outing request approved for " + outingRequests[index].name);
}

function rejectRequest(index) {
  var outingRequests = JSON.parse(localStorage.getItem('outingRequests')) || [];
  alert("Outing request rejected for " + outingRequests[index].name);
}
