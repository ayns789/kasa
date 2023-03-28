import Dropdown from '../Dropdown/index.jsx';
import Tag from '../Tag/index.jsx';
import List from '../List/index.jsx';
import Rating from '../Rating/index.jsx';
import SlideShow from '../Slideshow/index.jsx';
import styles from './index.module.css';
import stylesRat from '../Rating/index.module.css';

const RenderLodging = (props) => {
  const { lodging } = props;
  const hostName = lodging.host.name.split(' ');

  return (
    <div>
      <div className={styles.logement}>
        <SlideShow pictures={lodging.pictures} />
        <div className={styles.logementInfo}>
          <div className={styles.logementInfoTitle}>
            <h1 className={styles.logementTitle}>{lodging.title}</h1>
            <p className={styles.logementLocation}>{lodging.location}</p>
            <Tag tags={lodging.tags} />
          </div>
          <div className={styles.logementHost}>
            <div className={styles.host}>
              <p className={styles.hostName}>
                {hostName[0]}
                <br />
                {hostName[1]}
              </p>
              <img className={styles.hostPicture} src={lodging.host.picture} alt='Propriétaire' />
            </div>
            <div className={stylesRat.rating}>
              <Rating rating={lodging.rating} />
            </div>
          </div>
        </div>
        <div className={styles.descEquip}>
          <div className={styles.dropdownLodging}>
            <Dropdown
              title='Description'
              description={lodging.description}
              open={false}
              page='lodging'
            />
          </div>
          <div className={styles.dropdownLodging}>
            <Dropdown
              title='Équipements'
              description={<List list={lodging.equipments} />}
              open={false}
              page='lodging'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderLodging;
