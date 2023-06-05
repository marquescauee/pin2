import './register.css'

const Register = () => {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5">
                        <div className="cabeca-card mt-5 display-5">Cadastre-se</div>

                        <div className="card-body">
                            <form method="POST" action="{{ route('login') }}">
                                <div className="row mb-2 d-block">
                                    <label htmlFor="nome"
                                        className="lb-login col-md-4 col-form-label">Nome:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="nome" type="text"
                                            className="form-control" name="nome"
                                            required />
                                    </div>
                                </div>
                                <div className="row mb-2 d-block">
                                    <label htmlFor="email"
                                        className="lb-login col-md-4 col-form-label">Email:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="email" type="email"
                                            className="form-control" name="email"
                                            required autocomplete="email" autofocus />
                                    </div>
                                </div>
                                <div className="row mb-2 d-block">
                                    <label htmlFor="cpf"
                                        className="lb-login col-md-4 col-form-label">CPF:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="cpf" type="text"
                                            className="form-control" name="cpf"
                                            required />
                                    </div>
                                </div>

                                <div className="row mb-2 d-block">
                                    <label htmlFor="rua"
                                        className="lb-login col-md-4 col-form-label">Rua:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="rua" type="text"
                                            className="form-control" name="rua"
                                            required />
                                    </div>
                                </div>

                                <div className="row mb-2 d-flex">
                                    <div className='d-flex flex-column w-50'>
                                        <label htmlFor="numero"
                                            className="lb-login col-md-4 col-form-label margemEsquerda">Número:</label>

                                        <div className="col-md-3 d-flex margemEsquerda w-50">
                                            <input id="numero" type="number" min="0"
                                                className="form-control" name="numero"
                                                required />
                                        </div>
                                    </div>

                                    <div className='d-flex flex-column w-50'>
                                        <label htmlFor="bairro"
                                            className="lb-login col-md-4 col-form-label">Bairro:</label>

                                        <div className="col-md-4 d-flex w-80">
                                            <input id="bairro" type="text"
                                                className="form-control" name="bairro"
                                                required />
                                        </div>
                                    </div>
                                </div>



                                <div className="row mb-2 d-block">
                                    <label htmlFor="cidade"
                                        className="lb-login col-md-4 col-form-label">Cidade:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="cidade" type="text"
                                            className="form-control" name="cidade"
                                            required />
                                    </div>
                                </div>
                                <div className="row mb-5 d-block">
                                    <label htmlFor="password"
                                        className="lb-login col-md-4 col-form-label">Senha:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="password" type="password"
                                            className="form-control" name="password"
                                            required autocomplete="current-password" />
                                    </div>
                                </div>

                                <div className="row ">
                                    <button type="submit" className="m-auto w-50 d-block btn-login p-2 botaoEntrar">
                                        Cadastrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register