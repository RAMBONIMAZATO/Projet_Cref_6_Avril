package org.admin.dao;

import org.admin.beans.scolarite.Mention;
import org.admin.dao.DaoException;
import java.util.List;

public interface MentionDao{
	List<Mention> getAllMention() throws DaoException;
}