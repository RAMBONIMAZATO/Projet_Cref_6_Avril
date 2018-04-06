package org.admin.dao;

import org.admin.beans.scolarite.Student;
import org.admin.dao.DaoException;
import java.util.List;

public interface StudentDao{
	List<Student> getAllStudentByParcours(int id_parcours) throws DaoException;
	List<Student> getAllStudentByParcours(int id_parcours,String niveau) throws DaoException;
	Student getStudentById(int id_etudiant) throws DaoException;
	int getIdparcours(String nom_parcours) throws DaoException;
	List<Student> getAllListStudentByParcours(String parcours,String niveau) throws DaoException;
	void insererPhotoEtudiant(String nomFichier, String nom, String prenom) throws DaoException;
}
