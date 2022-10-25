import Dropdown from '../Dropdown';
import Tag from '../Tag';
import List from '../List';
import Rating from '../Rating';
import SlideShow from '../Slideshow';
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
              open={true}
              page='lodging'
            />
          </div>
          <div className={styles.dropdownLodging}>
            <Dropdown
              title='Équipements'
              description={<List list={lodging.equipments} />}
              open={true}
              page='lodging'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderLodging;
