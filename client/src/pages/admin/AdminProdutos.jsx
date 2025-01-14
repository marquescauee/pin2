import Header from "../../components/header/headerAdmin/Header"
import Footer from "../../components/footer/Footer"
import CreateModal from "../../components/modalProduto/CreateModal"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AdminProduto = () => {

    const navigate = useNavigate()

    const [descricao, setDescricao] = useState('')
    const [qtd, setQtd] = useState(0)
    const [idTipo, setIdTipo] = useState(0)

    const [tipoTipo, setTipoTipo] = useState('')
    const [descricaoTipo, setDescricaoTipo] = useState('')

    const [descricaoVazia, setDescricaoVazia] = useState(false)
    const [qtdVazia, setQtdVazia] = useState(false)
    const [idTipoVazio, setIdTipoVazio] = useState(false)

    const [produtos, setProdutos] = useState([])
    const [tipos, setTipos] = useState([])

    const [sucesso, setSucesso] = useState('')
    const [falha, setFalha] = useState(false)

    const resetEstado = () => {
        setDescricao('')
        setQtd(0)
        setIdTipo(0)
        setTipoTipo('')
        setDescricaoTipo('')
        setQtdVazia(false)
        setDescricaoVazia(false)
        setIdTipoVazio(false)
    }

    const resetMensagensBanner = () => {
        setSucesso('')
        setFalha(false)
    }

    const resetErros = () => {
        setDescricaoVazia(false)
        setQtdVazia(false)
        setIdTipoVazio(false)
        setSucesso('')
        setFalha(false)
    }

    const recuperarProdutos = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/produtos', {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
            });

            const data = await response.json()
            data.sort((a, b) => {
                if (a.nome > b.nome)
                    return 1
                if (a.nome < b.nome)
                    return -1
                return 0
            })
            setProdutos(data)
            return data

        } catch (err) {
            console.log(err)
        }
    }

    const recuperarTipos = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/tiposProdutos', {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
            });

            const data = await response.json()
            data.sort((a, b) => {
                if (a.nome > b.nome)
                    return 1
                if (a.nome < b.nome)
                    return -1
                return 0
            })
            setTipos(data)
            return data

        } catch (err) {
            console.log(err)
        }
    }

    const handleDelete = async (e, id) => {
        e.preventDefault()

        try {
            const response = await fetch(`http://localhost:8080/api/produtos/${id}`, {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
            });
            setSucesso('Produto removido com sucesso!')
            setFalha(false)
            recuperarProdutos()
            resetEstado()
            return response.json()

        } catch (err) {
            setFalha(true)
            setSucesso(false)
            console.log(err)
        }
    }

    useEffect(() => {
        recuperarProdutos()
        recuperarTipos()
    }, [])

    return (
        <div>
            <Header />

            {falha && <div className="fundo-erro mx-auto">Houve um erro na operação. Abra o Modal novamente para visualizar o erro.</div>}

            {sucesso && <div className="fundo-sucesso mx-auto">{sucesso}</div>}

            <div className="my-5">
                <h1 className="text-light">Produtos</h1>
            </div>
            <div className="box">
                <div className="opcaoSol">
                    <CreateModal descricao={descricao} setDescricao={setDescricao} qtd={qtd} setQtd={setQtd} idTipo={idTipo} setIdTipo={setIdTipo} descricaoVazia={descricaoVazia} setDescricaoVazia={setDescricaoVazia} qtdVazia={qtdVazia} setQtdVazia={setQtdVazia} idTipoVazio={idTipoVazio} setIdTipoVazio={setIdTipoVazio} setSucesso={setSucesso} setFalha={setFalha} tipos={tipos} resetEstado={resetEstado} resetMensagensBanner={resetMensagensBanner} resetErros={resetErros} recuperarProdutos={recuperarProdutos} setTipoTipo={setTipoTipo} tipoTipo={tipoTipo} setDescricaoTipo={setDescricaoTipo} descricaoTipo={descricaoTipo} />
                </div>
                <div className="textArea">
                    <div className="table">
                        <table className="tabela table table-bordered table-striped table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>Descrição</th>
                                    <th>Quantidade</th>
                                    <th colSpan={2}>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    produtos.map(prod => {
                                        return <tr key={prod.idProduto}>
                                            <td>{prod.descricao}</td>
                                            <td>{prod.qtd}</td>

                                            <td>
                                                <button onClick={() => navigate(`/produtos/edit/${prod.idProduto}`)} className="link-tabela botaoEditar">
                                                    <div>
                                                        <h2 className="d-flex justify-content-center botaoEditar">Editar</h2>
                                                    </div>
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" className="link-tabela botaoRemover" onClick={(e) => handleDelete(e, prod.idProduto)}>
                                                    <div>
                                                        <h2 className="d-flex justify-content-center botaoRemover">Remover</h2>
                                                    </div>
                                                </button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="fixed-bottom">
                <Footer />
            </div>
        </div>

    )
}

export default AdminProduto