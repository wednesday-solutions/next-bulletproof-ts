import { CustomCard, T } from "@app/common";
import { Trans } from "@lingui/macro";
import { useRouter } from "next/router";
import { IRepoItem } from "../../api/getRecommendations";

type RepoItemProps = {
  item: IRepoItem;
};

const RepoItem: React.FC<RepoItemProps> = ({ item }) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/info/${item?.name}?owner=${item?.owner.login}`);
  };

  return (
    <CustomCard key={item.id} onClick={handleRedirect}>
      {item.name}
      <T>
        <Trans> Repository Name: {item.name}</Trans>
      </T>
      <T>
        <Trans> Repository full name: {item.fullName}</Trans>
      </T>
      <T>
        <Trans> Repository stars: {item.stargazersCount}</Trans>
      </T>
    </CustomCard>
  );
};

export default RepoItem;
