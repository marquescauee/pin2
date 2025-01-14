package cg.br.meucalzone.repository;

import cg.br.meucalzone.models.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

    @Query(value = "SELECT p.* FROM produtos p inner join tipo_produto tp ON p.id_tipo_produto = tp.id_tipo_produto WHERE tp.tipo = 'cal' ", nativeQuery = true)
    List<Produto> findAllCalzones();

    @Query(value = "SELECT p.* FROM produtos p inner join tipo_produto tp ON p.id_tipo_produto = tp.id_tipo_produto WHERE tp.tipo = 'beb' ", nativeQuery = true)
    List<Produto> findAllBebidas();

    @Query(value = "SELECT p.* FROM produtos p inner join tipo_produto tp ON p.id_tipo_produto = tp.id_tipo_produto WHERE tp.tipo = 'bat' ", nativeQuery = true)
    List<Produto> findAllBatatas();
}
