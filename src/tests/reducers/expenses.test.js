import moment from "moment";
import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense by id if id not found ", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "3",
      description: "Water Bill",
      amount: 10990,
      note: "",
      createdAt: moment(0)
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("should edit an expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[2].id,
    updates: {
      id: expenses[2].id,
      description: "Tution",
      note: "",
      createdAt: moment(0),
      amount: 10009
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], action.updates]);
});

test("should not edit an expense if expense is not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "4",
    updates: {
      id: "4",
      description: "Tution",
      note: "",
      createdAt: moment(0),
      amount: 10009
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
