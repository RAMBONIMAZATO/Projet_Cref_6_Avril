  <div class="modal fade bd-example-modal-lg" id="cursus_${etudiant.id_etudiant}" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title" id="ModalLabel">${etudiant.nom} ${etudiant.prenom}</h3>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="table">
                                    <table>
                                        <thead>
                                            <th>Année-Universitaire</th>
                                            <th>Parcours</th>
                                            <th>Mention</th>
                                            <th>Niveau</th>
                                            <th>Situation</th>
                                        </thead>
                                            
                                        <tbody>
                                            <c:forEach var="cursus" items="${cursus}">
                                                <c:if test="${etudiant.id_etudiant eq cursus.id_etudiant}">
                                                    <td>${cursus.annee_u}</td>
                                                    <td>${cursus.nom_parcours}</td>
                                                    <td>${cursus.nom_mention}</td>
                                                    <td>${cursus.niveau}</td>
                                                    <td>${cursus.situation}</td>
                                                </c:if>
                                            </c:forEach>
                                        </tbody>
                                    </table>
                                </div>
    
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                            </div>
                        </div>
                    </div>
    
                </div>