import AudioMenu from '@/ui/navigation/AudioMenu';
import { NavAbout, NavContact, NavCategory } from '@/ui/navigation/Navigation';
import { fetchContacts, fetchCategories } from '@/data/fetchData';

export const MainNavigation = async () => {
    const contacts = await fetchContacts();
    const categories = await fetchCategories();

    return (
        <nav className="relative w-full text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            <ul className="flex flex-row justify-center md:justify-start w-full mt-1.5 md:mt-3.5 py-1.5 md:first:pl-3.5 border-y border-white">
                <AudioMenu />
                <NavAbout />
                <NavContact contacts={contacts} />
                <NavCategory categories={categories} />
            </ul>
        </nav>
    )
}