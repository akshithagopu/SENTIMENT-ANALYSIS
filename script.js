async function analyzeSentiment() {
    const reviewText = document.getElementById('reviewText').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p>Analyzing sentiment...</p>';
    
    try {
        // Load the Universal Sentence Encoder model
        const useModel = await use.load();
        // Embed the input text
        const embeddings = await useModel.embed([reviewText]);
        
        // A simple sentiment analysis function based on the embeddings
        const sentimentScore = embeddings.arraySync()[0].reduce((a, b) => a + b, 0);

        let sentimentStr;
        if (sentimentScore < 0) {
            sentimentStr = 'Positive';
        } else {
            sentimentStr = 'Negative';
        }

        resultDiv.innerHTML = `<p>Sentiment: ${sentimentStr}</p><p>Score: ${sentimentScore.toFixed(2)}</p>`;
    } catch (error) {
        console.error('Error analyzing sentiment:', error);
        resultDiv.innerHTML = `<p>An error occurred: ${error.message}</p>
                               <p>Please try again later.</p>`;
    }
}