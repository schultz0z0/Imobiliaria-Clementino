import { 
  type User, 
  type InsertUser, 
  type ServiceInterest, 
  type InsertServiceInterest 
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createServiceInterest(interest: InsertServiceInterest): Promise<ServiceInterest>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private serviceInterests: Map<string, ServiceInterest>;

  constructor() {
    this.users = new Map();
    this.serviceInterests = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createServiceInterest(insertInterest: InsertServiceInterest): Promise<ServiceInterest> {
    const id = randomUUID();
    const interest: ServiceInterest = { 
      ...insertInterest, 
      id,
      createdAt: new Date()
    };
    this.serviceInterests.set(id, interest);
    return interest;
  }
}

export const storage = new MemStorage();
