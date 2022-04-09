import React from "react";
import P from "../../../Components/Paragraph";
import Button from "../../../Components/Button";
import {RewardType} from "../Rewards";

interface Props extends RewardType {
  rewardId: number,
  outOfStock: boolean
};

export default class Reward extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  render() {

    return (
      <section className="p-4 border rounded-lg border-gray border-opacity-30 mb-6">
        <h3 className="font-bold mb-1">{this.props.title}</h3>
        <p className="text-cyan text-sm mb-4">Pledge {this.props.pledgeAmount}$ or more</p>
        <P>{this.props.description}</P>
        <P className="mb-6 mt-6 flex items-center"><span className="font-bold text-3xl text-black mr-2">{this.props.rewardsLeft}</span> left</P>
        <Button>Select Reward</Button>
      </section>
    )

  }

}