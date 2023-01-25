import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/BookingPage';
import { submitAPI, fetchAPI } from './utils/temp';

test('Renders the Choose Date Label', () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<BookingForm availableTimes={{
          times: [],
        }}
        dispatch={expect.anything()}
        />} />
      </Routes>
    </BrowserRouter>
  );
  const labelElement = screen.getByText('Choose date');
  expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns the correct expected value', () => {
  const today = new Date();
  const initialState = initializeTimes();
  const expectedResult = { times : fetchAPI(today)};
  expect(initialState).toEqual(expectedResult);
});

test('updateTimes returns the same state', () => {
  const state = {
    times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  };
  const action = { type: 'SOME_ACTION' };
  const newState = updateTimes(state, action);
  expect(newState).toEqual(state);
});

test('submitAPI returns true', () => {
  const formData = {
    date: '2023-01-29',
    time: '20:00',
    guests: '5',
    occasion: 'Birthday',
  };
  const result = submitAPI(formData);
  expect(result).toBe(true);
});