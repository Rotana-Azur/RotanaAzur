// Import des bibliothèques React et Material-UI
import React from 'react';
import { AppBar, Toolbar, Typography, Container, Card, CardContent, CardMedia, Grid } from '@mui/material';

// Définition du composant principal Restaurant
function Restaurant() {
  return (
    <div>
      {/* Barre d'applications avec le titre du restaurant */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Restaurant de l'Hôtel
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Contenu principal */}
      <Container sx={{ mt: 2 }}>
        {/* Grille de cartes pour afficher les plats */}
        <Grid container spacing={2}>
          {/* Carte du plat 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="lien_image_plat1.jpg"
                alt="Plat 1"
              />
              <CardContent>
                <Typography variant="h6">
                  Nom du plat 1
                </Typography>
                <Typography>
                  Description du plat 1.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Carte du plat 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="lien_image_plat2.jpg"
                alt="Plat 2"
              />
              <CardContent>
                <Typography variant="h6">
                  Nom du plat 2
                </Typography>
                <Typography>
                  Description du plat 2.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Ajoutez d'autres cartes pour d'autres plats */}
        </Grid>
      </Container>
    </div>
  );
}

export default Restaurant;
