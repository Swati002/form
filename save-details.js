    const form = document.getElementById("details-form");
    const detailsList = document.getElementById("details-list");
    
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const dob = document.getElementById("dob").value;
      const profile = document.getElementById("profile").value;

      if (name && email && phone && dob) {
        const details = JSON.parse(localStorage.getItem("details")) || [];
        details.push({ name, phone, email, dob});
        localStorage.setItem("details", JSON.stringify(details));
        
        displayDetails();
        
        form.reset();

      }
    });

    function displayDetails() {
      detailsList.innerHTML = "";
      const details = JSON.parse(localStorage.getItem("details")) || [];
      
      details.forEach((detail, index) => {
        const listItem = document.createElement("li");
        listItem.className = "detail-item";
        listItem.innerHTML = `
          <span>${detail.name} - ${detail.phone} - ${detail.email} - ${detail.dob}</span>
          <button onclick="editDetail(${index})">Edit</button>
          <button onclick="deleteDetail(${index})">Delete</button>
        `;
        detailsList.appendChild(listItem);
      });
    }
    

    function editDetail(index) {
      const details = JSON.parse(localStorage.getItem("details")) || [];
      const detail = details[index];
      if (detail) {
        document.getElementById("name").value = detail.name;
        document.getElementById("phone").value = detail.phone;
        document.getElementById("email").value = detail.email;
        document.getElementById("dob").value = detail.dob;
        deleteDetail(index);
      }
    }

    function deleteDetail(index) {
      const details = JSON.parse(localStorage.getItem("details")) || [];
      if (index >= 0 && index < details.length) {
        details.splice(index, 1);
        localStorage.setItem("details", JSON.stringify(details));
        displayDetails();
      }
    }

    displayDetails();
    
 