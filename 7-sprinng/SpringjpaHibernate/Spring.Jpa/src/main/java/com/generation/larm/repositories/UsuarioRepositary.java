package com.generation.larm.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.generation.larm.models.UsuarioModel;


@Repository

public interface UsuarioRepositary extends CrudRepository<UsuarioModel, Long>{

	
	public abstract ArrayList<UsuarioModel> findByPrioridad(Integer prioridad);

	public abstract ArrayList<UsuarioModel> findAll();
}
