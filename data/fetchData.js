export const fetchContacts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contacts?sort=contactName`);
    if (!res.ok) {
        throw new Error('Failed to fetch contacts');
    }
    const data = await res.json();
    return data.data;
};

export const fetchCategories = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories?sort=categoryName`);
    if (!res.ok) {
        throw new Error('Failed to fetch categories');
    }
    const data = await res.json();
    return data.data;
};