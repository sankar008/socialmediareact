import ad from "../../../../assets/img/ads/ninja-ad.svg";
export default function FakeAddWidget() {
  return (
    <div class="card is-ad">
      <div class="card-body">
        <img src={ad} alt="" />
        <div class="ad-text">Simple, pleasant, and productive.</div>
        <div class="ad-brand">Ads</div>
      </div>
    </div>
  );
}
