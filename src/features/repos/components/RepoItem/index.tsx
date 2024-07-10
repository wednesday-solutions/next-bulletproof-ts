import { CustomCard, T } from "@app/common";
import { i18n } from "@lingui/core";
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
        {i18n._("repo.repoItem.name", { name: item.name })}
      </T>
      <T>
        {i18n._("repo.repoItem.fullName", { fullName: item.fullName })}
      </T>
      <T>
        {i18n._("repo.repoItem.stars", { stargazersCount: item.stargazersCount })}
      </T>
    </CustomCard>
  );
};

export default RepoItem;
