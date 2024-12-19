import {toDoPage} from '../pageObjects/mainToDo.page'

describe('template spec', () => {
  beforeEach(()=>{
    toDoPage.visitPage()
  })
  it('Verify that clicking a todo item changes its checked state', () => {
    const itemt1 = "Todo item one"
    toDoPage.addToDoItem(itemt1)
      .markItemComplete(itemt1)
      .verifyItemIsChecked(itemt1)
   
  })

  it('Ensure that the todo list is correctly saved to local storage', () => {
    const itemt2 = "Todo item one"
    toDoPage.addToDoItem(itemt2)
    toDoPage.verifyItemExist(itemt2)
    cy.reload()
    toDoPage.verifyItemExist(itemt2)
  })

  it('Verify checked item automatically moves to the bottom of the list.', () => {
    const itemt3a = "Todo item one"
    const itemt3b = "Todo item two"
    const itemt3c = "Todo item three"

    toDoPage.addToDoItem(itemt3a)
      .addToDoItem(itemt3b)
      .addToDoItem(itemt3c)
      .markItemComplete(itemt3b)
      .verifyItemIsChecked(itemt3b)
      .verifyItemIsLast(itemt3b)
   
  })
})