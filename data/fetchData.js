export const fetchContacts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/contacts`);
    if (!res.ok) {
        throw new Error('Failed to fetch contacts');
    }
    const data = await res.json();
    return data.data;
};

export const fetchCategories = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/categories`);
    if (!res.ok) {
        throw new Error('Failed to fetch categories');
    }
    const data = await res.json();
    return data.data;
};