package org.admin.dao.impl;


import java.sql.*;

import org.admin.dao.DaoFactory;
import org.admin.dao.DaoException;
import org.admin.dao.ParcoursDao;
import org.admin.beans.scolarite.Mention;
import java.util.List;
import java.util.ArrayList;

import org.admin.beans.scolarite.Parcours;

public class ParcoursDaoImpl implements ParcoursDao{
	private DaoFactory daoFactory;

	public ParcoursDaoImpl(DaoFactory daoFactory)
	{
		this.daoFactory = daoFactory;
	}

	public List<Parcours> getAllParcours(int id_mention) throws DaoException{
		List<Parcours> lesParcours = new ArrayList<Parcours>();
		Connection connexion = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultat = null;

		try{
			connexion = daoFactory.getConnection();
			String query = "SELECT * FROM \"Vue_parcours_responsable_n_etudiant\" WHERE id_mention = ?";
			preparedStatement = connexion.prepareStatement(query);
			preparedStatement.setInt(1, id_mention);
			resultat = preparedStatement.executeQuery();

			while(resultat.next()){
				int idMention = resultat.getInt("id_mention");
				int id_parcours = resultat.getInt("id_parcours");
				String nom_parcours = resultat.getString("nom_parcours");
				Parcours parcours = new Parcours(id_parcours, idMention, nom_parcours);
				
				parcours.setN_etudiant(resultat.getInt("n_etudiant"));
				parcours.setNom_responsable(resultat.getString("responsable"));
				parcours.setTel(resultat.getString("phone"));
				parcours.setNiveau(resultat.getString("niveau"));
				lesParcours.add(parcours);

				//System.out.println("id_mention : " + idMention);
				//System.out.println("id_parcours : " + id_parcours);
				//System.out.println("nom_parcours" + nom_parcours);
			}


			connexion.close();
			preparedStatement.close();
			resultat.close();
		}catch(SQLException e) {
			throw new DaoException("Erreur SQL: "+e.getMessage());
		}

		return lesParcours;
	}
}
