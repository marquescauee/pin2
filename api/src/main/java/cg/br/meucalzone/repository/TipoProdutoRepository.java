package cg.br.meucalzone.repository;

import cg.br.meucalzone.models.TipoProduto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoProdutoRepository extends JpaRepository<TipoProduto, Integer> {
}
