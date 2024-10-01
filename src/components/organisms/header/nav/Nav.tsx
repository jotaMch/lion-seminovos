import { Item, ItemList } from "./style";

interface NavComponentsProps {
    home?: string;
    services?: string;
    category?: string;
}

export const Nav: React.FC<NavComponentsProps> = (props) => {
    const navItems = [
        { label: props.home, id: "home" },
        { label: props.services, id: "services" },
        { label: props.category, id: "category" }
    ];

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <ItemList>
            {navItems.map((item, index) => (
                <Item key={index} onClick={() => handleScroll(item.id)}>
                    {item.label}
                </Item>
            ))}
        </ItemList>
    );
};
