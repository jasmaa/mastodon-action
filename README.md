# Mastodon Action

GitHub Action that toots the head commit on push

# Usage

Register an application on your Mastodon instance
and add the access token as a secret to your repository.
Then add the following to your pipeline:

    - name: Mastodon notification
        uses: jasmaa/mastodon-action@master
        env:
          TOKEN: ${{ secrets.TOKEN }}
        with:
          mastodon-url: mastodon.social
          message: New commit!

# Development

    npm i -g @zeit/ncc
    yarn install
    npm run package