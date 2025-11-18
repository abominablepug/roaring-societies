const topicSwitcher = (topicNumber: number) => {
  switch (topicNumber) {
    case 1:
      return <div>Topic 1 Content</div>;
    case 2:
      return <div>Topic 2 Content</div>;
    case 3:
      return <div>Topic 3 Content</div>;
    case 4:
      return <div>Topic 3 Content</div>;
    case 5:
      return <div>Topic 3 Content</div>;
    case 6:
      return <div>Topic 3 Content</div>;
    default:
      return <div>Default Topic Content</div>;
  }
}

export default function Topic({ topicNumber }: { topicNumber: number }) {
  return topicSwitcher(topicNumber)
}