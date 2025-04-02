package gb.simsys.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import gb.simsys.backend.model.Livro;

@Repository
public interface Repositorio extends CrudRepository<Livro, Long> {

        

}
