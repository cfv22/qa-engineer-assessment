class todoMainPage {
//locators

    get inputTodo (){
        return cy.get('input[placeholder="Add a new todo item here"]');
    }

    get todoItems (){
        return cy.get('ul label')
    }

    //page actions 

    visitPage(){
        cy.visit('http://localhost:3000')
    }

    addToDoItem(toDoItem){
        this.inputTodo.type(`${toDoItem}{enter}`)
        return this
    }

    markItemComplete(toDoItem){
        cy.contains(toDoItem).click()
        return this
    }

    verifyItemIsChecked(toDoItem){
        cy.contains(toDoItem).find('input').should('be.checked')
        return this

    }

    verifyItemExist(toDoItem){
        cy.contains(toDoItem).should('exist')
        return this

    }

    verifyItemIsLast(toDoItem){
        this.todoItems.last().should('contain',toDoItem)
        return this
    }


}

export const toDoPage = new todoMainPage()