import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivPartnersBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivPartnersBrandDarkIcon',
  component: SubBrandDerivPartnersBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivPartnersBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivPartnersBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
