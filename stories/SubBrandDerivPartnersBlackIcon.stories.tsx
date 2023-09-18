import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivPartnersBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivPartnersBlackIcon',
  component: SubBrandDerivPartnersBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivPartnersBlackIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivPartnersBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
