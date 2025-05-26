import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User";

// Inngest клиентін жасау (оқиғаларды жіберу және алу үшін)
export const inngest = new Inngest({ id: "quickcart-next" });

// Жаңа пайдаланушы деректерін дерекқорға сақтау функциясы
export const syncUserCreation = inngest.createFunction(
    {
        id: 'clerk-пайдаланушыны-сақтау'
    },
    { event: 'clerk/user.created' },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl: image_url
        };
        await connectDB();
        await User.create(userData);
    }
);

// Пайдаланушы деректерін дерекқорда жаңарту функциясы
export const syncUserUpdation = inngest.createFunction(
    {
        id: 'clerk-пайдаланушыны-жаңарту'
    },
    { event: 'clerk/user.updated' },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl: image_url
        };
        await connectDB();
        await User.findByIdAndUpdate(id, userData);
    }
);

// Пайдаланушыны дерекқордан жою функциясы
export const syncUserDeletion = inngest.createFunction(
    {
        id: 'clerk-пайдаланушыны-жою'
    },
    { event: 'clerk/user.deleted' },
    async ({ event }) => {
        const { id } = event.data;
        await connectDB();
        await User.findByIdAndDelete(id);
    }
);
