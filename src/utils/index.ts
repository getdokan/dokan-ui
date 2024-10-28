import clsx, { ClassValue } from 'clsx';
import { debounce } from 'lodash';
import { twMerge } from 'tailwind-merge';

export function classNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const debounceSearch = debounce(async (inputValue, callback) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?search=${inputValue}&_limit=10`);
    const results = await response.json();
    callback(results.map((result: { title: string }) => ({ label: result.title, value: result.title })));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}, 300);
