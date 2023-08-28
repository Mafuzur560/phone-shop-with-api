const loadPhone = async (searchText, isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data ;
    displayPhones(phones, isShowAll)
    
}




const displayPhones = (phones, isShowAll) =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';


    // Display show all button show
    const showAllBtnContainer = document.getElementById('show-all-btn-container');
    if(phones.length > 12 && !isShowAll){
        showAllBtnContainer.classList.remove('hidden');
    }else{
        showAllBtnContainer.classList.add('hidden');
    }

    // limited phone show
    if(!isShowAll){
        phones = phones.slice(0,12);
    }
    

    phones.forEach(phone => {

        const phoneCard = document.createElement('div');
        phoneCard.classList = `card py-4 bg-gray-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>       
        `;
        phoneContainer.appendChild(phoneCard);
    });
}



const handleSearch = (isShowAll) =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value ;
    loadPhone(searchText, isShowAll);
}

// Handle show btn
const handleShowAll = () =>{
    handleSearch(true);
}