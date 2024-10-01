import { useState } from "react";
import { Header } from "../../../organisms/header/Header";
import { stores } from "./informations/info";
import { Article, Card, CardInformation, ConteinerLayoutStore, Erro, ImageCard, Items, ItemsList, Time } from "./style";

export const StoreLayot = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredStores = stores.filter(store =>
        store.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(searchTerm);

    return (
        <ConteinerLayoutStore>
            <Header booleanNav={true} onSearch={setSearchTerm} />
            <h2>Conheça nossas lojas</h2>
            <ItemsList>
                {filteredStores.length > 0 ? (
                    filteredStores.map((item, index) => (
                        <Items key={index}>
                            <Card>
                                <CardInformation>
                                    <h2>{item.location}</h2>
                                    <Article>
                                        <div>
                                            <ImageCard src={item.imageUrl} alt="loja" />
                                            <i>{item.address}</i>
                                        </div>
                                        <Time>
                                            <h3>Nossos horários de funcionamento</h3>
                                            <h4>Dias úteis:</h4> <p>{item.schedule.weekdays}</p>
                                            <h4>Sábados:</h4> <p>{item.schedule.saturday}</p>
                                            <h4>Domingos:</h4> <p>{item.schedule.sunday}</p>
                                        </Time>
                                    </Article>
                                </CardInformation>
                            </Card>
                        </Items>
                    ))
                ) : (
                    <Erro>"Nenhuma loja encontrada para sua pesquisa"</Erro>
                )}
            </ItemsList>
        </ConteinerLayoutStore>
    );
};
