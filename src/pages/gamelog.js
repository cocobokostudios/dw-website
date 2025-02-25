import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import GameList from '../components/game-list';

const PlayMyCollection = ({ data }) => {
    const pmcGames = data.allPlayMyCollectionCsv.nodes;

    return (
        <Layout title="Gamelog">
            <header>
                <h1>Gamelog</h1>
                <h2>I play cool stuff, both <a href="https://twitch.tv/davidwesst">on stream</a> and off. This is a sort of "play-log" of video games I've played starting in 2021 when I started tracking it.</h2>
            </header>
            <hr />
            <section>
                <GameList games={pmcGames} />
            </section>
        </Layout>
    );
}

export default PlayMyCollection;

export const query = graphql`
    query {
        allPlayMyCollectionCsv {
            nodes {
                Title
                Stream_Date
                Platform
            }
        }
    }
`