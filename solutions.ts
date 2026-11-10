
function multiplyValue(value: number, multiplier: number = 2): number {
	return value * multiplier;
}


function processInput(input: string | number | boolean): string | number {
	if (typeof input === 'string') {
		return input.trim().toLowerCase();
	} else if (typeof input === 'number') {
		return input * 10;
	}else {
		return input ? 'Active' : 'Inactive';
	}
}


function formatCoordinate(coordinates: readonly [number, number, string]): string {
	return `Location: ${coordinates[2]} (${coordinates[0]}, ${coordinates[1]})`;
}

function concatenateArrays<T>(...arrays: T [][]): T[] {
	const concatenatedArray: T[]=[];

	arrays.forEach((array: T[]) => {
		array.forEach((element: T) => {
			concatenatedArray.push(element);
		});
	});

	return concatenatedArray;
}

interface Course {
	title: string;
	students: number;
	isPublished: boolean;
}


function getPopularCourses(courses: Course[], minStudents: number): Course[] {
	return courses.filter((course: Course) => course.isPublished && course.students >= minStudents);
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
	return items.map((item: T) => item[key]);
}

class Employee {
	constructor(
		protected name: string,
		private baseSalary: number,
	) {}

	getDetails(): string {
		return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
	}
}

class Manager extends Employee {
	constructor(
		name: string,
		baseSalary: number,
		private department: string,
	) {
		super(name, baseSalary);
	}

	getRoleInfo(): string {
		return `Manager of ${this.department}: ${this.name}`;
	}
}


async function validateAgeAsync(age: number): Promise<string> {
	return new Promise((resolve, reject) => {
		if (age >= 18) {
			setTimeout(() => {
				resolve('Access Granted');
			}, 1000);
		} else {
			reject(new Error('Access Denied: Must be 18 or older'));
		}
	});
}
