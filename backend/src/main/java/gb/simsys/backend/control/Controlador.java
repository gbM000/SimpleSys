package gb.simsys.backend.control;

import org.springframework.web.bind.annotation.RestController;

import gb.simsys.backend.model.Livro;
import gb.simsys.backend.repository.Repositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@CrossOrigin
public class Controlador{

    @Autowired
    private Repositorio query;

    @PostMapping("/")
    public Livro create(@RequestBody Livro book){
        return query.save(book);
    }

    @GetMapping("/")
    public Iterable<Livro> read(){
        return query.findAll();
    }

    @PutMapping("/")
    public Livro update(@RequestBody Livro book){
        return query.save(book);
    }

    @DeleteMapping("/{codigo}")
    public void delete(@PathVariable long codigo){
        query.deleteById(codigo);;
    }
}