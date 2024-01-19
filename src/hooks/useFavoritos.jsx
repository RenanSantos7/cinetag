import { useContext } from "react";
import { FilmesContext } from "../context/FilmesContext";

export function useFavoritos() {
    const {
        setNotificando,
        setMsgNotificacao
    } = useContext(FilmesContext)

    function notificar(msg) {
        const tempoNotificacao = 3000
        setNotificando(true)
        setTimeout(() => { setNotificando(false) }, tempoNotificacao)
        setMsgNotificacao(msg)
    }

    return {
        notificar
    }
}