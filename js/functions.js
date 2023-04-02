export function dateToURLFormat(date) {
    return date.toLocaleString().split(" ")[0].split("/").reverse().join("-")
}

        //sur le split on sépare les heures de la date, et toLocaleString permet de formater la date comme on veut. L'indice 0 permet de prendre uniquement la date.
        //sur le split / on crée un tableau avec année, mois et jour en 3 strings