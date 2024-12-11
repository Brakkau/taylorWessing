import './Item.css';

export const Item: React.FC = ({ item }) => {
  return (
    <article
      className="client-item"
      role="article"
      aria-labelledby={`client-title-${item.clientCode}`}
    >
      <div className="client-item_content">
        <h3 id={`client-title-${item.clientCode}`}>{item.clientName}</h3>
        <div role="contentinfo">
          <p>{item.clientDescription}</p>
        </div>
      </div>
    </article>
  );
};

Item.displayName = 'Item';
