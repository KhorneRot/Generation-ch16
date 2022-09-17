import org.springframework.stereotype.Service;

import com.generation.larm.models.UsuarioModel;

import com.generation.larm.repositories.UsuarioRepositary;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;

@Service

public class UsuarioService {
	@Autowired
	UsuarioRepositary usuariorepository;

	public ArrayList<UsuarioModel> obtenerusuarios(){
		return (ArrayList<UsuarioModel>)usuariorepository.findAll();
		
	}
	public UsuarioModel guardarUsuario(UsuarioModel usuario){
        return usuariorepository.save(usuario);
    }
}

