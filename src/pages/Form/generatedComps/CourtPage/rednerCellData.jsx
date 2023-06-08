import { colors } from "oolib";

export const renderCellData = (text) => {
    const quoteRegex = /"(.*?)"/g;
    const colonRegex = /:(.*)/g;
    const result = [];
  
    let lastIndex = 0;
    let match;
    while ((match = quoteRegex.exec(text)) !== null) {
      const startIndex = match.index;
      const endIndex = quoteRegex.lastIndex;
  
      result.push(text.slice(lastIndex, startIndex));
      result.push(<span key={startIndex} style={{ fontWeight: 'bold', color: colors.greyColor100 }}>{match[1]}</span>);
  
      lastIndex = endIndex;
    }
  
    result.push(text.slice(lastIndex));
  
    let finalResult = [];
    result.forEach((part, index) => {
      const partString = part.toString(); // Convert part to a string
      const colonMatch = partString.match(colonRegex);
      if (colonMatch) {
        const colonIndex = partString.indexOf(':');
        const nonHighlightedText = partString.slice(0, colonIndex);
        const nextLineText = colonMatch[1];
  
        finalResult.push(<span key={index}>{nonHighlightedText} : </span>);
        finalResult.push(<br key={`${index}-br`} />);
        finalResult.push(<span key={`${index}-nextLineText`}>{nextLineText}</span>);
      } else {
        finalResult.push(part);
      }
    });
  
    return finalResult;
  };