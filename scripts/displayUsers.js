$(document).ready(function () {
  const userList = $("#userList");
  const searchInput = $("#searchInput");
  const sortButton = $("#sortButton");
  const sortButtonReverse = $("#sortButtonReverse");
  const dropdownButtonText = $("#dropdownButtonText");
  let usersData = []; // Store fetched users
  // Fetch users from the API
  $.get("https://jsonplaceholder.typicode.com/users", function (users) {
    usersData = users; // Store fetched users
    displayUsers(usersData);

    // Filter users based on search input
    searchInput.on("input", function () {
      const searchText = searchInput.val().toLowerCase();
      const filteredUsers = usersData.filter((user) =>
        user.name.toLowerCase().includes(searchText)
      );
      displayUsers(filteredUsers);
    });

    // Sort users alphabetically when button is clicked
    sortButton.on("click", function () {
      var spanText = sortButton.text();
      dropdownButtonText.text(spanText);
      usersData.sort((a, b) => a.name.localeCompare(b.name));
      displayUsers(usersData);
    });
    // Sort users reverse-alphabetically when button is clicked
    sortButtonReverse.on("click", function () {
      var spanText = sortButtonReverse.text();
      dropdownButtonText.text(spanText);
      usersData.sort((a, b) => a.name.localeCompare(b.name)).reverse();
      displayUsers(usersData);
    });
  });

  // Display Users Function
  function displayUsers(users) {
    const parseAddress = (
      address = {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      }
    ) => {
      return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}, ${address.geo.lat}, ${address.geo.lng}.`;
    };
    userList.empty();
    if (users.length === 0) {
      userList.append(`<div>No Customers found</div>`);
    }
    users.forEach(function (user) {
      userList.append(`<div class="bg-white rounded shadow">
        <div >
          <div class="flex flex-row-reverse justify-between md:justify-start items-end md:items-start md:flex-col">
            <img
              src="https://picsum.photos/${user.id + 190}"
              class="h-32  w-32 mr-4 md:mr-0 mt-4 md:mt-0 md:h-64 md:w-full object-cover rounded-full md:rounded-none md:rounded-t "
              alt=${user.name}
            />
            <div class="p-4 flex flex-col gap-6">
              <!-- intro -->
              <div class="flex flex-col">
                <h5 class="text-lg md:text-xl font-semibold">${user.name}</h5>
                <small class="text-xs text-slate-500">@${user.username}</small>
                <!-- brief -->
                <p class="text-[#51C5FF] text-xs mt-4 md:mt-6">“${
                  user.company.catchPhrase
                }”</p>
               
              </div>
            </div>
          </div>
          <hr class="mt-4 mx-4 md:hidden h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
          <!-- items -->
          <div class="p-4 flex flex-col gap-2">
            
            <div class="flex gap-2 text-xs items-center">
              <div class="w-4 md:w-6 "><img src="./assets/mail.svg" /></div>
              <p class="relative top-0 flex-1">${user.email}</p>
            </div>
            <div class="flex gap-2 text-xs items-start">
              <div class="w-4 md:w-6  flex-4"><img src="./assets/location.svg" /></div>
              <p class="relative top-0 flex-1">
                ${parseAddress(user.address)}
              </p>
            </div>
            <div class="flex gap-2 text-xs items-center">
              <div class="w-4 md:w-6 "><img src="./assets/phone.svg" /></div>
              <p class="relative  flex-1">${user.phone}</p>
            </div>
            <div class="flex gap-2 text-xs items-center">
              <div class="w-4 md:w-6 "><img src="./assets/website.svg" /></div>
              <p class="relative flex-1">${user.website}</p>
            </div>
            <div class="flex gap-2 text-xs items-center">
              <div class="w-4 md:w-6 "><img src="./assets/briefcase.svg" /></div>
              <p class="relative flex-1">${user.company.name}</p>
            </div>
            <div class="flex gap-2 text-xs items-start">
              <div class="w-4 md:w-6 "><img src="./assets/industry.svg" /></div>
              <p class="relative top-1 flex-1">${user.company.catchPhrase}</p>
            </div>
          </div>
        </div>
      </div>`);
    });
  }
});
