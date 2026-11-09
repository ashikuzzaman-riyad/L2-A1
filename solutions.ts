const multiplyValue = (a: number, b?: number) => {
  if (b === undefined) {
    return a * 2;
  } else {
    return a * b;
  }
};

const processInput = (a: string | number | boolean) => {
  if (typeof a === "string") {
    return a.toLocaleLowerCase().trim();
  } else if (typeof a === "number") {
    return a * 10;
  } else if (a === true) {
    return "Active";
  } else {
    return "Inactive";
  }
};

const formatCoordinate = (a: readonly [number, number, string]) => {
  const [latitude, longitude, city] = a;

  return `Location: ${city} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...items: T[][]) => {
  return items.flat();
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (course: Course[], minStudents: number) => {
  return course.filter(
    (coures) => coures.isPublished && coures.students >= minStudents,
  );
};

interface Users {
  id: number;
  name: string;
  role: string;
}

const pluckValues = <T, K extends keyof T>(items: T[], key: K) => {
  return items.map((item) => item[key]);
};

class Employee {
  protected name: string;
  private baseSalary: number;
  constructor(name: string, basSalary: number) {
    this.name = name;
    this.baseSalary = basSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


const validateAgeAsync = async (age: number): Promise<string> => {
  if (age >= 18) {
    await new Promise((wait) => setTimeout(wait, 1000));
    return "Access Granted";
  } 
  throw new Error("Access Denied: Must be 18 or older");
};


