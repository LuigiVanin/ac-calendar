import { Birthday } from "./birthday";
import PedroAvatarUrl from "../../assets/avatars/pedrola-sapato.jpg";
import ArturAvatarUrl from "../../assets/avatars/artur-ninja-de-geladeira.jpg";
import BetoAvatarUrl from "../../assets/avatars/beto-maconha.jpg";
import NetoAvatarUrl from "../../assets/avatars/neto-junior.jpg";
import PabloAvatarUrl from "../../assets/avatars/pablo-taxista.jpg";
import PauloAvatarUrl from "../../assets/avatars/paulo-demonio-amarelo.jpeg";

export const birthdays: Birthday[] = [
    new Birthday({
        name: "Luis Felipe Vanin",
        nickname: "Vanin",
        birthday: "1999-09-20",
        email: "vanin@gmail.com",
        phone: "999999999",
        avatar: "https://avatars.githubusercontent.com/u/49759902?v=4",
    }),
    new Birthday({
        name: "Pablo Taxista",
        nickname: "Pablox",
        birthday: "2003-04-07",
        email: "vanin@gmail.com",
        phone: "558494717742",
        avatar: PabloAvatarUrl,
    }),
    new Birthday({
        name: "Roberto",
        nickname: "Beto",
        birthday: "2004-09-30",
        email: "vanin@gmail.com",
        phone: "558494138574",
        avatar: BetoAvatarUrl,
    }),
    new Birthday({
        name: "Wellington",
        nickname: "Well",
        birthday: "2004-05-04",
        email: "vanin@gmail.com",
        phone: "558494717742",
        avatar: "https://avatars.githubusercontent.com/u/102266350?v=4",
    }),
    new Birthday({
        name: "Paulo Bezerril",
        nickname: "Paul",
        birthday: "2004-11-18",
        email: "vanin@gmail.com",
        phone: "558494717742",
        avatar: PauloAvatarUrl,
    }),
    new Birthday({
        name: "Pedro Felix Lucena",
        nickname: "Bellix",
        birthday: "1999-08-07",
        email: "pedrorola@gmail.com",
        phone: "999999999",
        avatar: PedroAvatarUrl,
    }),
    new Birthday({
        name: "Artur Term",
        nickname: "Tutu",
        birthday: "1998-09-12",
        email: "pedrorola@gmail.com",
        phone: "558499268717",
        avatar: ArturAvatarUrl,
    }),
    new Birthday({
        name: "Neto Neto",
        nickname: "Neto",
        birthday: "2002-10-29",
        email: "pedrorola@gmail.com",
        phone: "999999999",
        avatar: NetoAvatarUrl,
    }),
];
