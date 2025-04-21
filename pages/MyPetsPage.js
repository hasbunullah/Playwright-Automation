class MyPetsPage {

    constructor(page) {
        this.page = page;
        this.addPetbtn = page.locator('.show-pet-modal-btn-account')
        this.petName = page.locator('#name') 
        this.petType = page.locator('#pet-type')
        this.petTypeValue = page.getByLabel('Pet type *')
        this.petWeight = page.locator('#weight')
        this.petBirthDay = page.locator('#birthday')
        this.petAge = page.locator('#pet-age')
        this.petAgeValue = page.getByLabel('Age *')
        this.saveBtn = page.locator('.btn-save')
        this.threeDots = page.locator("[data-name='Somii'] .text")
        this.deleteButton = page.locator('.delete-confirmation-btn')
        this.breed= page.locator('#dog-breed');
        this.uploadImage= page.locator('#load-img-pet-');
        this.uploadedImage= page.locator('#imagePet');
        this.myPets = page.locator("[href='/my-pets']");

    }

    async addPet(){
        await this.addPetbtn.click();
        await this.petName.fill('Somii');
        await this.petType.click();
        await this.petTypeValue.selectOption('Dog');
        await this.breed.click();
        await this.breed.selectOption('Mixed Dog Breed');
        await this.petWeight.fill('20');
        await this.petBirthDay.fill('12/12/2021');
        await this.petAge.click();
        await this.petAgeValue.selectOption('2-3 years');
        await this.saveBtn.click();
        await this.page.waitForTimeout(5000); // Waits for 5 seconds
        }

    async removePet(){
        
        await this.threeDots.click();
        await this.deleteButton.click();
    }

    async myPetsPage(){
        await this.myPets.click();

        }

    async uploadPetImage(){

        await this.addPetbtn.click();
        await this.uploadImage.setInputFiles('dog.jpg');
    }    




}
module.exports = { MyPetsPage };