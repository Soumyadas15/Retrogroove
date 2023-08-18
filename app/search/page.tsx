import getSongsByTitle from "@/actions/getSongsByTitle";
import getSongsByAuthor from "@/actions/getSongsByAuthor";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./components/SearchContent";

interface SearchProps {
    searchParams: {
        title: string;
    }
};

const Search = async ({
    searchParams
}: SearchProps) => {
    const songsTitle = await getSongsByTitle(searchParams.title);
    const songsAuthor = await getSongsByAuthor(searchParams.title);

    return (
        <div
            className="
                bg-neutrl-900
                rouned-lg
                h-full
                w-full
                overflow-hidden
                overflow-y-auto
            "
        >
            <Header>
                <div className="mb-2 flex flex-col gap-y-6">
                    <h1 className="text-black text-3xl font-semibold">
                        Search
                    </h1>
                    <SearchInput/>
                </div>
            </Header>
            <SearchContent songs={songsAuthor}/>
        </div>
    )
}
export default Search;